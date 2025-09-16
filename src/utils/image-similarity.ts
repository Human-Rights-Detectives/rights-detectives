import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";

// MobileNet을 사용하여 특징 벡터(Feature Vector) 추출
const getFeatureVector = async (imgElement: HTMLImageElement) => {
  if (!imgElement) return null;

  const model = await mobilenet.load();
  const tensor = tf.browser
    .fromPixels(imgElement)
    .resizeNearestNeighbor([224, 224])
    .toFloat()
    .expandDims();
  return model.infer(tensor, true); // 특징 벡터 추출
};

// 코사인 유사도 계산
const cosineSimilarity = (vec1: tf.Tensor, vec2: tf.Tensor) => {
  return tf.tidy(() => {
    const dotProduct = tf.sum(tf.mul(vec1, vec2));
    const normA = tf.norm(vec1);
    const normB = tf.norm(vec2);
    return dotProduct.div(normA.mul(normB)).dataSync()[0]; // 0~1 사이 값 반환
  });
};

// 이미지 비교 실행 (이미지 요소를 직접 받음)
export const compareImages = async (
  img1: HTMLImageElement,
  img2: HTMLImageElement
) => {
  if (!img1 || !img2) return null;

  const vec1 = await getFeatureVector(img1);
  const vec2 = await getFeatureVector(img2);

  if (!vec1 || !vec2) return null;

  const similarityScore = cosineSimilarity(vec1, vec2) * 100; // 0~100% 변환
  return similarityScore.toFixed(2);
};

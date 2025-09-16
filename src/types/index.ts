// 미션 인터페이스 - 각 에피소드 내의 개별 미션을 정의
export interface Mission {
  id: number; // 미션 고유 ID
  missionNumber: number; // 미션 번호
  description: string; // 미션 설명
  completeDescription: string; // 미션 완료 설명
}

// 에피소드 인터페이스 - 전체 에피소드 정보를 정의
export interface Episode {
  id: string; // 에피소드 고유 ID
  number: number; // 에피소드 번호
  title: string; // 에피소드 제목
  description: string; // 에피소드 설명
  missions: Mission[]; // 에피소드에 포함된 미션 목록
}

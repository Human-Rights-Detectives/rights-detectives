import type { Episode } from "../types";

const episodesData: Episode[] = [
  {
    id: 1,
    number: 1,
    title: "환자분!\n이러지 마세요",
    description:
      "거위군은 이번 달 부터\n정신과 병동에서 실습 중인\n대학생입니다.\n거위군은 퇴원을 앞둔\n다람쥐 환자를 만났어요.\n그런데 갑자기..!",
    color: {
      linesColor: "#FCBB76",
      innerColor: "#F99D31",
      borderColor: "#BF5C1D",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "병원 실습 중 사건 발생!\n정신과 병동 실습 중인 거위군.\n 퇴원을 앞둔 다람쥐 환자에게\n 인사를 건네다, 갑자기…!",
        completeDescription:
          "거위군을 때렸어요!\n폭행을 당한 거위군은… \n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description:
          "거위군은 대학교 현장실습 담당 교수님께\n실습중 겪은 폭행을 털어놓았어요.\n진지하게 듣던 교수님은\n거위군에게 이렇게 말했어요.",
        completeDescription:
          "학생 실습 중 폭행은 중대한 문제야!\n학교와 병원 사이의 협약에도 어긋나.\n이건 산재 신청도 가능해.\n거위군은 산재 신청을 하러…!",
      },
      {
        id: 3,
        missionNumber: 3,
        description: "거위군은 산재 신청을 위해\n근로복지공단으로 향했습니다.",
        completeDescription:
          "병원에서는 공식으로 사과하고,\n치료비와 심리상담\n비용을 지원했어요.\n거위군은 자신의\n권리를 지켜냈어요!",
      },
    ],
  },
  {
    id: 2,
    number: 2,
    title: "배달하다\n생긴 일",
    description:
      "갑작스러운 사고에 당한\n피자가게 배달원 토끼군.\n토끼군의 상황을 파악하고\n문제를 해결해야 한다.",
    color: {
      linesColor: "#EBEFA5",
      innerColor: "#C4D76C",
      borderColor: "#79A253",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "토끼군은 피자가게에서\n배달 일을 해요.\n오늘은 처음 가보는 길이네요?!?\n평소처럼 배달을 가다가!!!!",
        completeDescription:
          "끼익~ 펑! 사고가 났어요\n다리를 다쳐서\n치료를 받아야 했죠.\n치료비가 부족한 토끼군은\n어떻게 해야 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description:
          "근로계약서 (일할 때 쓰는 약속 종이)에\n“사고는 직원 책임, 사장은 책임 없다”\n라고 써 있었어요. 사장님은 치료비도\n안 주고, 일도 그만두라고 했어요.",
        completeDescription:
          "토끼군은 노무사 사무실\n(노동에 대해 도와주는 곳)로 가서\n상담을 받기로 했어요.\n노무사님이 말씀하시기\n시작했어요",
      },
      {
        id: 3,
        missionNumber: 3,
        description:
          "“일하다 다친 건 산재야! 치료를\n오래 받아야 하면 나레에서\n치료비를 주고,사장이 책임 없다고\n적은 건 법에 어긋나서 효과가 없어!” ",
        completeDescription:
          "토끼군은 사장님에게\n노무사님의 말을 전했어요.\n결과적으로 사장님이 치료비를\n지원해주고, 해고도 하지 않았어요!\n토끼군은 권리를 잘 지켜냈어요!",
      },
    ],
  },
  {
    id: 3,
    number: 3,
    title: "계약서를\n안썼어요!",
    description:
      "물고기 참치군은 초밥집에서\n아르바이트를 시작했어요.\n그런데 사장님이 “바쁘니까\n일부터 하자!”며 계약서를\n쓰지 않고 바로 일을 시켰어요.",
    color: {
      linesColor: "#FD9EDA",
      innerColor: "#FF4EF3",
      borderColor: "#BB24C9",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          " 월급날이 지났는데도\n급여도 못 받고 쉬는 시간도 없이\n계속 일만 하게 된 참치군",
        completeDescription:
          "문제가 심각하다고 생각한\n침치군은 누구에게\n이 상황을 털어놓을까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "참치군은\n선생님께 찾아가\n이 상황을 설명했어요.",
        completeDescription:
          "선생님은 참치군에게 “계약서를\n안 쓰면 임금, 근무시간, 휴게시간\n같은 권리가 지켜지기 어려워.\n일을 시작하기 전에 반드시\n근로계약서를 서면으로\n작성해야 해” 라고\n말했어요.",
      },
      {
        id: 3,
        missionNumber: 3,
        description: "참치군은 다음날 초밥 집에\n출근 후 사장님에게 말해서\n계약서를 쓰게 되었어요.",
        completeDescription:
          "참치군은 다짐했다.\n“앞으로는 꼭 계약서부터 쓸 거야!”",
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "월급을\n안주는 사장님",
    description:
      "노트북을 사기 위해\n달팽이군은\n편의점 알바를 시작했어요!",
    color: {
      linesColor: "#F4383B",
      innerColor: "#FF6767",
      borderColor: "#BF1D1D",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "하지만 알바를 하는 2달동안\n월급날에 돈을 받지 못했어요!\n답답한 마음에 잠시 밖에서\n바람을 쐬는 달팽이군",
        completeDescription:
          "달팽이군은 어떻게 해야\n돈을 받을까\n고민하다가 어딘가로 향하게\n되는데",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "노동청으로 간 달팽이군\n노동청 직원에게 상황을\n설명하며 도와달라고 했다.",
        completeDescription:
          "노동청 직원은 달팽이를\n데리고 어딘가로 향한다.",
      },
      {
        id: 3,
        missionNumber: 3,
        description: "노동청 직원이 데려간 곳은\n빨간 아파트",
        completeDescription:
          "사장님에게 임금 지급\n명령을 하여\n그동안 미렸던 월급을\n지급받게 된다.\n“도와주셔서 감사합니다!”",
      },
    ],
  },
  {
    id: 5,
    number: 5,
    title: "몇장만\n더 찍을게!",
    description:
      "모델 아르바이트를 시작한\n펭귄군.\n처음에는 괜찮았는데 점점\n이상한 일이 생기기 시작한다.\n과연 무슨 일이 일어난걸까?",
    color: {
      linesColor: "#FCE57B",
      innerColor: "#F9DA36",
      borderColor: "#BF9521",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "모델 아르바이트를 시작한\n펭귄군.\n처음에는 괜찮았는데 점점\n이상한 일이 생기기 시작한다.\n과연 무슨 일이 일어난걸까?",
        completeDescription:
          "사장님이 계약 시간을 훌쩍\n넘긴 채 촬영을 하고 있어요.\n그럴 때마다 사장은\n“조금만 더 찍자”라며\n연장근로를 강요했다.",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "펭귄군은 계약 시간을 훌쩍\n넘긴 채 촬영하는 날이 많아져\n답답한 마음에 핸드폰을 꺼내\n검색한다.",
        completeDescription:
          "서로 약속되지 않은 연장근로는\n안좋은 일이란걸 알게 된 펭귄군\n방법을 찾아보는데…",
      },
      {
        id: 3,
        missionNumber: 3,
        description: "펭귄군은 온라인 노무사의 상담을\n통해 더 일할 때는 반드시 동의가\n필요하고,그에 맞는 추가 임금도\n받아야 한다는걸 알게 된다.",
        completeDescription:
          "사장은 펭귄군의 요구를 받아들여\n추가 임금을 지급했고,\n그 후부터는 정해진 근로시간을 지키며\n촬영할 수 있게 되었다.",
      },
    ],
  },
  {
    id: 6,
    number: 6,
    title: "제발,\n쉬게 해주세요",
    description:
      "학원비를 벌기 위해\n아침부터 저녁까지\n일하고 있는 토끼양.\n너무 힘들어 보여요.\n무슨 일인지 알아볼까요?",
    color: {
      linesColor: "#9B89DD",
      innerColor: "#C3BBE9",
      borderColor: "#791DBF",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "8시간 동안 일하는 토끼양에게\n쉬는 시간을 보장해 주지 않네요.\n불만은 가득했지만\n끝내 말하지는 못했어요.",
        completeDescription:
          "쉬지 마!\n일하는 시간엔\n계속 일해!",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "토끼양은 궁금했어요.\n“이렇게 못 쉬는 게 맞을까?\n누구한테 물어봐야 하지?”",
        completeDescription:
          "토끼는 고용노동부에\n상담을 요청했어요.\n“4시간 넘게 일하면,\n30분은 꼭 쉬게 해야 해요!”",
      },
      {
        id: 3,
        missionNumber: 3,
        description: "토끼양은 용기내\n사장님께 말했어요.\n“법대로 쉬는 시간을\n주세요!”",
        completeDescription:
          "사장님은 잘못을 인정하고\n30분 쉴 수 있게 되었어요.\n토끼는 자신의 권리를\n지켜냈어요.",
      },
    ],
  },
  {
    id: 7,
    number: 7,
    title: "앗 뜨거!!",
    description:
      "고기집에서\n아르바이트를\n시작한 하양이에게\n생긴 일은?",
    color: {
      linesColor: "#1D84FF",
      innerColor: "#71FFFB",
      borderColor: "#00CFFF",
    },
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "고기를 굽던 중 실수로 뜨거운\n불판에 팔을 데이고 말았어요\n“앗!! 뜨거!!!\n으아아아아!!!”",
        completeDescription:
          "하양이는 심하게 데었지만,\n사장님은 병원비를\n주지 않았어요.\n하양이는 어떻게 해야 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "하양이는 인터넷을 통해\n‘근로복지공단’을\n알게 돼요.\n곧장 공단에 찾아가 도움을\n요청해요.",
        completeDescription:
          " 하양이는 실습생이나\n단기 알바도 다칠 경우\n산재보상 받을 수 있다는 것을\n알게 되었어요.",
      },
      {
        id: 3,
        missionNumber: 3,
        description: "얼마 후, 하양이는\n근로복지공단의 도움으로\n산재 처리를 받아서\n치료비 일부를 보상받았어요.",
        completeDescription:
          "하양이는 기뻐서 소리쳐요!\n“이제 병원비 걱정 안 해도 돼!!”",
      },
    ],
  },
];

export default episodesData;

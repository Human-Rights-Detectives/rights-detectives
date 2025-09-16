import type { Episode } from "../types";

const episodesData: Episode[] = [
  {
    id: 1,
    number: 1,
    title: "환자분 이러지 마세요",
    description:
      "거위군은 이번 달 부터\n정신과 병동에서 실습 중인\n대학생입니다.\n거위군은 퇴원을 앞둔\n다람쥐 환자를 만났어요.\n그런데 갑자기..!",
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
    title: "배달하다 생긴 일",
    description:
      "환자는 자신의 질병과 치료에 대해 충분히 알 권리가 있습니다. 이 에피소드에서는 환자의 알 권리와 의료진의 설명 의무를 다룹니다.",
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "배달하다 생긴 일!\n배달원 거위군이 음식을\n배달하던 중 사고가 발생했어요.\n고객이 음식을 받지 않겠다고\n하는데... 어떻게 해야 할까요?",
        completeDescription:
          "고객이 음식을 받지 않겠다고\n하는 상황에서 거위군은\n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "환자의 알 권리에는 어떤 것들이 포함되는지 설명하세요.",
        completeDescription:
          "환자의 알 권리에는 진단명, 치료 방법, 부작용, 예후 등이 포함됩니다.",
      },
    ],
  },
  {
    id: 3,
    number: 3,
    title: "계약서를 안썼어요!",
    description:
      "의료 사고가 발생했을 때 환자와 의료진의 권리와 의무를 이해하는 것이 중요합니다. 이 에피소드에서는 의료 사고 관련 법적 문제를 다룹니다.",
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "계약서를 안썼어요!\n거위군이 새로운 직장에서\n일을 시작했는데 계약서를\n제대로 작성하지 않았어요.\n사장님이 월급을 주지 않겠다고\n하는데... 어떻게 해야 할까요?",
        completeDescription:
          "계약서 없이 일한 거위군은\n월급을 받을 수 있을까요?\n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "근로계약서의 중요성과 작성 방법을 설명하세요.",
        completeDescription:
          "근로계약서에는 근로조건, 임금, 근로시간, 근무지 등이 명시되어야 합니다.",
      },
    ],
  },
  {
    id: 4,
    number: 4,
    title: "월급을 안주는 사장님",
    description:
      "의료 사고가 발생했을 때 환자와 의료진의 권리와 의무를 이해하는 것이 중요합니다. 이 에피소드에서는 의료 사고 관련 법적 문제를 다룹니다.",
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "월급을 안주는 사장님!\n거위군이 한 달 동안 열심히\n일했는데 사장님이 월급을\n주지 않겠다고 해요.\n어떻게 해야 할까요?",
        completeDescription:
          "월급을 받지 못한 거위군은\n어떤 조치를 취해야 할까요?\n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "임금체불 시 취할 수 있는 조치를 설명하세요.",
        completeDescription:
          "임금체불 시 노동위원회에 신고하거나, 고용노동부에 신고할 수 있습니다.",
      },
    ],
  },
  {
    id: 5,
    number: 5,
    title: "몇장만 더 찍을게!",
    description:
      "의료 사고가 발생했을 때 환자와 의료진의 권리와 의무를 이해하는 것이 중요합니다. 이 에피소드에서는 의료 사고 관련 법적 문제를 다룹니다.",
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "몇장만 더 찍을게!\n거위군이 촬영 현장에서\n사진을 찍고 있는데 감독이\n계속 더 찍으라고 해요.\n거위군은 이미 12시간째\n일하고 있는데... 어떻게 해야 할까요?",
        completeDescription:
          "12시간째 일하고 있는 거위군은\n어떻게 해야 할까요?\n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "근로시간 제한과 휴게시간에 대해 설명하세요.",
        completeDescription:
          "주 40시간, 1일 8시간을 초과할 수 없으며, 4시간 근무 시 30분, 8시간 근무 시 1시간 휴게시간이 필요합니다.",
      },
    ],
  },
  {
    id: 6,
    number: 6,
    title: "제발, 쉬게 해주세요",
    description:
      "의료 사고가 발생했을 때 환자와 의료진의 권리와 의무를 이해하는 것이 중요합니다. 이 에피소드에서는 의료 사고 관련 법적 문제를 다룹니다.",
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "제발, 쉬게 해주세요!\n거위군이 연속으로 3일째\n야근을 하고 있어요.\n사장님이 쉬지 말고 계속\n일하라고 하는데... 어떻게 해야 할까요?",
        completeDescription:
          "연속 야근으로 지친 거위군은\n어떻게 해야 할까요?\n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "근로자의 휴식권과 거부권에 대해 설명하세요.",
        completeDescription:
          "근로자는 법정 근로시간을 초과하는 근무를 거부할 권리가 있으며, 충분한 휴식을 취할 권리가 있습니다.",
      },
    ],
  },
  {
    id: 7,
    number: 7,
    title: "앗 뜨거!",
    description:
      "의료 사고가 발생했을 때 환자와 의료진의 권리와 의무를 이해하는 것이 중요합니다. 이 에피소드에서는 의료 사고 관련 법적 문제를 다룹니다.",
    missions: [
      {
        id: 1,
        missionNumber: 1,
        description:
          "앗 뜨거!\n거위군이 식당에서 일하다가\n뜨거운 물에 손을 데었어요.\n사장님이 치료비를 주지 않겠다고\n하는데... 어떻게 해야 할까요?",
        completeDescription:
          "업무 중 다친 거위군은\n어떻게 해야 할까요?\n이어서 어떻게 할까요?",
      },
      {
        id: 2,
        missionNumber: 2,
        description: "산업재해와 사업주의 의무에 대해 설명하세요.",
        completeDescription:
          "업무 중 발생한 상해는 산업재해로 인정되며, 사업주는 치료비와 휴업급여를 지급해야 합니다.",
      },
    ],
  },
];

export default episodesData;

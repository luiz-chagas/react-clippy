interface Props {
  name?: "Clippy";
  onLoad?: () => void;
  ref: React.MutableRefObject<Clippy>;
}

const Animation = [
  "Congratulate",
  "LookRight",
  "SendMail",
  "Thinking",
  "Explain",
  "IdleRopePile",
  "IdleAtom",
  "Print",
  "Hide",
  "GetAttention",
  "Save",
  "GetTechy",
  "GestureUp",
  "Idle1_1",
  "Processing",
  "Alert",
  "LookUpRight",
  "IdleSideToSide",
  "GoodBye",
  "LookLeft",
  "IdleHeadScratch",
  "LookUpLeft",
  "CheckingSomething",
  "Hearing_1",
  "GetWizardy",
  "IdleFingerTap",
  "GestureLeft",
  "Wave",
  "GestureRight",
  "Writing",
  "IdleSnooze",
  "LookDownRight",
  "GetArtsy",
  "Show",
  "LookDown",
  "Searching",
  "EmptyTrash",
  "Greeting",
  "LookUp",
  "GestureDown",
  "RestPose",
  "IdleEyeBrowRaise",
  "LookDownLeft",
] as const;

type Animation = typeof Animation[number];

interface Clippy {
  animate: (action: Animation) => void;
  animations: () => string[];
  gestureAt: (x: number, y: number) => void;
  hide: () => void;
  moveTo: (x: number, y: number) => void;
  show: () => void;
  speak: (message: string) => void;
  stop: () => void;
  stopCurrent: () => void;
}

export function ClippyRef(props: React.PropsWithRef<Props>): React.ReactElement;
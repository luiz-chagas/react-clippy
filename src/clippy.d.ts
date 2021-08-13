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

const Agents = [
  "Bonzi",
  "Clippy",
  "F1",
  "Genie",
  "Genius",
  "Links",
  "Merlin",
  "Peedy",
  "Rocky",
  "Rover",
] as const;

interface Props {
  name?: typeof Agents[number];
  onLoad?: () => void;
  ref: React.MutableRefObject<Clippy | null | undefined>;
}

interface Clippy {
  animate: () => void;
  animations: () => string[];
  gestureAt: (x: number, y: number) => void;
  hide: () => void;
  moveTo: (x: number, y: number) => void;
  show: () => void;
  play: (action: Animation) => void;
  speak: (message: string) => void;
  stop: () => void;
  stopCurrent: () => void;
}

export function Clippy(props: React.PropsWithRef<Props>): React.ReactElement;

export type TTaskStatus = "todo" | "inprogress" | "completed";

export interface ITask {
  title: string;
  description: string;
  category: string;
  status: TTaskStatus;
  time: number;
}

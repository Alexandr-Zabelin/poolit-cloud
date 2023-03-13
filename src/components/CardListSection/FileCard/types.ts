interface FileCardData {
  id: string;
  name: string;
  poolitKey: string;
  description?: string | null;
  creationDate?: string | null;
  size?: number | null; //bytes
}

export interface FileCardProps {
  data: FileCardData;
}

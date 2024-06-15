export interface ItemsType {
  id: number;
  name: string;
  email: string;
  avatar: string;
  lastLogin: string;
  memberSince: string;
  permission: string;
  unReadMessages: number;
  isActive?: boolean; // Not required cause API does not have to return this value (to avoid ts type conflict)
}

export interface internalContactListInterface {
  type: "phone" | "email";
  value: string;
  source: "internal" | "external";
}

export interface messageInterFace {
  id: number;
  userId: number;
  name: string;
  avatar: string;
  date: string;
  type: string;
  message: string;
  isDeleted?: boolean;
}

export interface activeOperatorInterface {
  userId: number,
  name: string,
  country: string,
  avatar: string,
}

export interface chatTagsInterface {
  id: number,
  name: string,
}

export interface clientOwnerInterface {
  id: number|string,
  name: string,
  avatar: string,
}

import { Message } from "ai";

export const CHAT_THREAD_ATTRIBUTE = "CHAT_THREAD";
export const MESSAGE_ATTRIBUTE = "CHAT_MESSAGE";

export interface ChatMessageModel {
  id: string;
  createdAt: Date;
  isDeleted: boolean;
  threadId: string;
  userId: string;
  content: string;
  role: ChatRole;
  type: "CHAT_MESSAGE";
}

export type ConversationStyle = "creative" | "balanced" | "precise";
export type ChatType = "simple" | "data" | "mssql";
export type LLMModel = "gpt-3.5" | "gpt-4";

export type ChatRole = "system" | "user" | "assistant" | "function";

export interface ChatThreadModel {
  id: string;
  name: string;
  model: LLMModel;
  createdAt: Date;
  userId: string;
  useName: string;
  isDeleted: boolean;
  chatType: ChatType;
  conversationStyle: ConversationStyle;
  type: "CHAT_THREAD";
}

export interface PromptGPTBody {
  id: string; // thread id
  model: LLMModel; // model name
  chatType: ChatType;
  conversationStyle: ConversationStyle;
}

export interface PromptGPTProps extends PromptGPTBody {
  messages: Message[];
}

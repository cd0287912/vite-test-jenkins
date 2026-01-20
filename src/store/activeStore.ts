import { create } from "zustand"
interface ActiveState {
  // 定义状态
  activeData: EventInfo | null
  activePlugData: EventInfoPlug | null
  // 定义操作方法
  setActiveData: (data: EventInfo) => void
  setActivePlugData: (data: EventInfoPlug) => void
  clearActiveData: () => void
}
export const useActiveStore = create<ActiveState>((set) => ({
  // 初始状态
  activeData: null,
  activePlugData: null,
  // 状态更新方法
  setActiveData: (data) => set({ activeData: data }),
  setActivePlugData: (data) => set({ activePlugData: data }),
  clearActiveData: () => set({ activeData: null, activePlugData: null })
}))



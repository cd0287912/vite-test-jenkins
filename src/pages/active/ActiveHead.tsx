import { useActiveStore } from "./../../store/activeStore"

export default function ActiveHead() {
  const eventName = useActiveStore(v => v.activeData?.eventInfo.eventName)

  return <div>
    <h1>{eventName}</h1>
  </div>
}
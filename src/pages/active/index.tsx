import { useParams } from "@tanstack/react-router"
import { useQuery } from "@tanstack/react-query"
import { activeApi } from "./../../api/active"
import { useActiveStore } from "./../../store/activeStore"
import ActiveHead from "./ActiveHead.tsx"


export default function Active() {
  const { setActiveData, setActivePlugData } = useActiveStore()
  const { id } = useParams({ strict: false })
  const { isPending } = useQuery({
    queryKey: ["active", id],
    queryFn: async () => {
      const activeEventData = await activeApi.selectVisitEventInfo<EventInfo>(id as string)
      setActiveData(activeEventData.data)
      const type = activeEventData.data.eventInfo.eventType as string
      const activePlugData = await activeApi.selectEventInfoPlug<EventInfoPlug>(id as string, type)
      setActivePlugData(activePlugData.data)
      return "success"
    },
    enabled: !!id
  })
  if (isPending) return "loading..."
  return <div>1212
    <ActiveHead />
  </div>
}
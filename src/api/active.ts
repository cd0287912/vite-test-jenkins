import { fetchRequest } from "./fecth"

export const activeApi = {
  selectVisitEventInfo<T>(eventId: string) {
    return fetchRequest<Response<T>>(`/sd-api/event/indexNew/selectVisitEventInfo?eventId=${eventId}`)
  },
  selectEventInfoPlug<T>(eventId: string, type: string) {
    return fetchRequest<Response<T>>(`/sd-api/event/indexNew/selectEventInfoPlug?eventId=${eventId}&type=${type}`)
  }
}

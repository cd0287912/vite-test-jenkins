type LiveUrl = {
  code: string
  flvUrl: string
  type: string
  status: string
}

type EventInfo = {
  eventInfo: {
    eventType: string
    eventName: string
    orgName: string
    orgid: string
    eventCode: string
  }
  eventLiveBackAttr: any
  eventOtherInfo: any
  liveUrls: LiveUrl[] | null
}

type EventInfoPlug = {
  aiAuth: boolean
  attrList: any
  videoList: any
  watermarks: any
  speakers: any
}
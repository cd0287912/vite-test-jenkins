import { createFileRoute } from "@tanstack/react-router"
import Active from "../../pages/active"

export const Route = createFileRoute("/active/$id")({
  component: Active,
  context: (ctx) => {
    const { params } = ctx
    return {
      id: params.id
    }
  }
})




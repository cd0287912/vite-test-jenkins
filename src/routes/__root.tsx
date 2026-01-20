import {
  createRootRoute,
  Outlet,
  useRouterState
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

interface MyRouteContext {
  title?: string;
  // 你可以添加更多字段
}

export const Route = createRootRoute<undefined, MyRouteContext>({
  component: RootComponent
})

function RootComponent() {
  const { matches } = useRouterState()
  const activeMatch = matches[matches.length - 1]
  const { title = "Default Title" } = activeMatch.context
  document.title = title
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

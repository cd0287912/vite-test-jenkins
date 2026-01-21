import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

interface MyRouteContext {
  title?: string
  // 你可以添加更多字段
}

export const Route = createRootRoute<undefined, MyRouteContext>({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

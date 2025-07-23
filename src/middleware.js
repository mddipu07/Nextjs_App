import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const currentCookie = request.cookies.get("nextjs-token")
   console.log(currentCookie.value);
   const dummyUserData = {
    role: "user",
    email: "test@admin.com"
   }

   let isServicePage = request.nextUrl.pathname.startsWith("/services")
   let isAdmin = dummyUserData.role = "admin"
  if(isServicePage && !isAdmin)
    return NextResponse.redirect(new URL("/login" , request.url))
  return NextResponse.next()
}
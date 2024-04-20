import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
// const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware((auth,req)=> {
    //Restrict admin route to usersvwith specific role
    // if(isAdminRoute(req)) auth().protect({role: 'org:admin'});

    // //restrict dashboard routes to logged in users
    // if(isDashboardRoute(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/translate', '/(api|trpc)(.*)']
}
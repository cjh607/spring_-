import {GetPopupOptions, OpenPopup, SupabaseClient} from "@/features/login";

export const GoogleLogin_supabase = async () => {
    const { data,error } = await SupabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
            skipBrowserRedirect: true,
            redirectTo: window.location.origin + "/social_login/google",
        },
    })
    if (error) {
        console.error('구글 로그인 오류:', error.message)
        return
    }
    if (data?.url) {
        OpenPopup(data.url, GetPopupOptions(500, 500));
    }
}
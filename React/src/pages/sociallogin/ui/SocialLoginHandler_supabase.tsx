 import {useEffect} from "react";
 import {SupabaseClient} from "@/features/login";
 import axios from "axios";

export const SocialLoginHandler_supabase = () => {
     useEffect(() => {
         const getUser = async () => {
             const {data, error} = await SupabaseClient.auth.getUser()

             if (error || !data.user) {
                 console.error('로그인 실패', error)
                 return error
             }
             const { email, user_metadata } = data.user
              //백엔드에 유저 정보 전달
             const res = await axios.post('/api/test/login',
                 {
                     email,
                     name: user_metadata.full_name,
                     avatar: user_metadata.avatar_url,
                 },
                 { withCredentials: true }  //refresh용 쿠키 받기 위해 필요
             )
              //액세스 토큰 저장
             const { accessToken } = res.data
              //예: Redux 저장
         }
         getUser()
     },[])

    return (
        <div>
             <p>로그인 처리 중...</p>

        </div>
    )

}

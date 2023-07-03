export default function userProfile({params}: any){
    return (
        <div>
            <h1>This is user Profile {params.id}</h1>
        </div>
    )
}
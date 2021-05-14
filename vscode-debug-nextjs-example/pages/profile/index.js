import Link from 'next/link';

function Profile({ data }) {
    return (
        <>
            <p>{`Hello ${data.name} from Server`}</p>
            <Link href="/profile/client-index">Go client</Link>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();

    console.log(data);
    return { props: { data } };
}

export default Profile;
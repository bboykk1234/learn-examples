function ClientProfile({ data }) {
    const num1 = 1;
    const num2 = 2;

    const total = num1 + num2;
    return (
        <>
            <p>{`Hello ${data.name} from client`}</p>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();

    console.log(data);
    return { props: { data } };
}

export default ClientProfile;
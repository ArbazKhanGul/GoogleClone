import Head from 'next/head'
import { useRouter } from 'next/router';
import Header from '../components/Header'
import SearchResults from '../components/SearchResults';
import Response from '../Response';

export default function Search({results})
{
// console.log(results)
const router=useRouter()
return <div>
<Head>
    <title>{router.query.term}-Google Search</title>
    <link rel="icon" href="/google.ico" />
</Head>

{/* Header */}
<Header searchVal={router.query.term}/>

<SearchResults results={results}></SearchResults>
</div>
}

export async function getServerSideProps(context) {
const useDummyData=false;
const startIndex = context.query.start || "0";

const data=useDummyData?Response: await fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCV5lbL2Fimb_B1wN2f--31fl43XWjxO4Y&cx=8d35698f720536153&q="+context.query.term+"&start"+startIndex).then((response)=>{
    return response.json();
});

return {
    props:{
        results:data
    }
}
}
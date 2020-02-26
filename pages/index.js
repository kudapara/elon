import { useEffect, useState } from 'react'
import Head from 'next/head'
import TableRow from '../components/TableRow'

export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await fetch('/api')
      const newData = await res.json()
      setData(newData)
    }
    getData()
  }, [])
  return (
    <main>
      <Head>
        <title>Next.js, FaunaDB and Node.js</title>
      </Head>
      <h1>Next.js, FaunaDB and Node.js</h1>
      <hr />
      <div className="container-scroll">
        <div className="container">
          <h2>Customer Data</h2>
          <div className="table">
            <h4>name</h4>
            <h4 className="telephone">telephone</h4>
            <h4 className="credit-card">credit card</h4>
          </div>
          {data.length > 0 ? (
            data.map(d => (
              <TableRow
                key={d.data.telephone}
                creditCard={d.data.creditCard.number}
                firstName={d.data.firstName}
                lastName={d.data.lastName}
                telephone={d.data.telephone}
              />
            ))
          ) : (
            <>
              <TableRow loading />
              <TableRow loading />
              <TableRow loading />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
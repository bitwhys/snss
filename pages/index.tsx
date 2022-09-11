import Link from 'next/link'
import Layout from '../components/Layout'
import Box from '@mui/material/Box'
import TeamLogo from '../components/TeamLogo'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Box sx={{ width: 124, height: 124 }}>
        <TeamLogo team="MIA" />
      </Box>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage

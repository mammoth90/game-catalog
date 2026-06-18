import { useGetDevelopersQuery } from '@/services/api/reducer.js'
import { useLocation } from 'react-router-dom'
import CommonCard from '@/entities/CommonCard'
import Error from '@/shared/ui/Error'
import Loading from '@/shared/ui/Loading'

const initialParams = {
  page: 1,
  page_size: 32,
}
const Developers = () => {
  const { data, isLoading, isError } = useGetDevelopersQuery(initialParams)
  if (isLoading) return <Loading />
  if (isError) return <Error />
  if (data?.results) return <CommonCard data={data.results} />
}

export default Developers

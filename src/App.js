import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/actions/action';

const App = () => {
  const products = useSelector(state => state.data.products)
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchData())

  }, [])

  return (
    <div>
      {JSON.stringify(products)}

    </div>
  )
}

export default App;

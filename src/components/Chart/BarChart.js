import React,{useState, useEffect} from 'react'
import CountTable from '../CountTable'
import {Chart as ChartJS, BarElement, LinearScale, CategoryScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'
import {Row,Col} from 'antd'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement
)


const BarChart = () => {
  //set my state of data to the fetched data
  const [allData, setAllData] = useState([])

  //delete duplicates of year
  let uniqueYear = [...new Set(allData.map(x => x.year))]

  //arrange year in ascending order
  let sortYear = uniqueYear.sort((a,b) => a-b)

  //get all years from the fetched API data
  let allYear = (allData?.map(x => x.year))

  // gets the counts of each year
  let map = allYear.reduce((allYear, e) =>
   allYear.set(e, (allYear.get(e) || 0) + 1), new Map());

  const dataa = [...map.entries()]
  const d = dataa.map(x => {
    return {
      year: x[0],
      count: x[1]
    } 
  })

  const sortedData = d.sort((a, b) => a.year - b.year)

  useEffect(() => {
    const results =  {
    method: 'GET',
    url: 'https://data-imdb1.p.rapidapi.com/actor/id/nm0000199/awards/',
    params: {page_size: '22'},
    headers: {
      'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
      'x-rapidapi-key': 'a3fc7abddamsh62daebd9214c747p1b3647jsn1c00ffc59876'
    }
  };
      axios.request(results).then(function (response) {
        setAllData(response.data.results)
      }).catch(function (error) {
        console.error(error);
      });
    }, [])

    var data =  {
      labels: sortYear,
      datasets: [{
        label: `${allData?.length} Years of Award`,
        data: [...map.values()],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
        }]
    }
    var options = {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        },
        legend:{
          labels: {
            fontSize: 23
          }
        }
      }
    }

    return (
      <>
        <CountTable
        data={sortedData}
        />
        <Row justify='center'>
          <Col span={20}>
            <Bar
            data={data}
            height={100}
            options={options}
            />     
          </Col>
        </Row>
      </>
    )
  }

  export default BarChart;
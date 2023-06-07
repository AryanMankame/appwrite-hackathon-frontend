import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
// import { male, female, getRandomInt } from './avatarget'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'
import { PickersDay } from '@mui/x-date-pickers/PickersDay'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function Home() {
  //instead of these variable use the data stored in redux wherever necessary
  const gender = 'male'
  // const ind = getRandomInt(0, 3)
  const name = 'Aryan Mankame'
  const firstName = 'Aryan'
  const [load, setload] = useState(true)
  const [currdate, setcurrdate] = useState('5-6-2023')
  useEffect(() => {
    setTimeout(() => {
      setload(false)
      // console.log('Im =>',load)
    }, 2000)
    setUserData({
      '5-6-2023': [
        [
          {
            Breakfast: [
              {
                img: 'https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22933.jpg?size=626&ext=jpg&ga=GA1.2.738037006.1685704227&semt=sph',
                name: 'Dosa',
                cal: 170,
                carbs: 40,
                protein: 10,
                sugar: 5,
              },
              {
                img: 'https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?size=626&ext=jpg&ga=GA1.2.143797289.1685691440&semt=sph',
                name: 'Sandwich',
                cal: 170,
                carbs: 40,
                protein: 10,
                sugar: 5,
              },
            ],
            Lunch: [],
            Snack: [],
            Dinner: [],
          },
        ],
        [
          {
            img: 'https://cdn.pixabay.com/photo/2020/09/10/15/23/sunset-5560658_640.jpg',
            name: 'Volleyball',
            duration: 60,
            calories: 300,
            rep: 1,
          },
          { img: '', name: 'Walking', duration: 15, calories: 60, rep: 2 },
        ],
        [
          {
            calTotal: 2400,
            proteinTotal: 40,
            carbsTotal: 34,
            sugarTotal: 13,
          },
        ],
      ],
      '8-6-2023': [
        [
          {
            Breakfast: [
              {
                img: 'https://img.freepik.com/premium-photo/masala-dosa-is-south-indian-meal-served-with-sambhar-coconut-chutney-selective-focus_466689-22933.jpg?size=626&ext=jpg&ga=GA1.2.738037006.1685704227&semt=sph',
                name: 'Poha',
                cal: 170,
                carbs: 40,
                protein: 10,
                sugar: 5,
              },
              {
                img: 'https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?size=626&ext=jpg&ga=GA1.2.143797289.1685691440&semt=sph',
                name: 'Tea',
                cal: 170,
                carbs: 40,
                protein: 10,
                sugar: 5,
              },
            ],
            Lunch: [],
            Snack: [],
            Dinner: [],
          },
        ],
        [
          {
            img: 'https://cdn.pixabay.com/photo/2020/09/10/15/23/sunset-5560658_640.jpg',
            name: 'Volleyball',
            duration: 60,
            calories: 300,
            rep: 1,
          },
          { img: '', name: 'Walking', duration: 15, calories: 60, rep: 2 },
        ],
        [
          {
            calTotal: 2400,
            proteinTotal: 40,
            carbsTotal: 34,
            sugarTotal: 13,
          },
        ],
      ],
    })
  }, [])
  const [userData, setUserData] = useState({})
  return (
    <Page>
      {window.innerWidth >= 500 ? (
        load === true ? (
          <div>{console.log('Loading')}Loading...</div>
        ) : (
          <Main>
            <Navbar />
            <Display>
              <div id="upper">
                <div
                  style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                  }}
                >
                  Hello, {firstName} ! &#x1F44B;
                </div>
                <div
                  style={{
                    fontSize: '16px',
                    color: 'rgba(182, 186, 187, 1)',
                  }}
                >
                  Welcome let's become the version of you today!
                </div>
              </div>
              <div id="lower">
                <div id="left-low">
                  {/* Steps to be Done : 
                            1.When fetching data I would create a loading page effect during that time fetch this particular user's data for this entire month 
                            2.whenever the user switches the month in the calendar load that months data and when fetched create a map where key would be date and value would be [[meals],[exercise],[total days's calculation]]*/}
                  <div className="meals" id="breakfast">
                    <div id="lab">Breakfast :</div>
                    <div className="cards">
                      {userData[currdate][0][0]['Breakfast'].map(
                        (item, index) => {
                          return (
                            <Card>
                              <div id="food-img">
                                <img src={item.img} alt=""></img>
                              </div>
                              <div id="food-info">
                                <div
                                  style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <div>{item.name}</div>
                                </div>
                                <div>Calories: {item.cal}</div>
                                <div>Protein: {item.protein}</div>
                                <div>Carbs: {item.carbs}</div>
                                <div>Sugar: {item.sugar}</div>
                              </div>
                            </Card>
                          )
                        }
                      )}
                    </div>
                  </div>
                  <hr
                    style={{
                      background: 'lime',
                      color: 'lime',
                      borderColor: 'lime',
                      height: '3px',
                      width: '20vw',
                      marginLeft: '15%',
                    }}
                  />
                  <div className="meals" id="lunch">
                    <div id="lab">Lunch :</div>
                    <div className="cards">
                      {userData[currdate][0][0]['Breakfast'].map((item) => {
                        // console.log(item.img)
                        return (
                          <Card>
                            <div id="food-img">
                              <img src={item.img} alt=""></img>
                            </div>
                            <div id="food-info">
                              <div
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                }}
                              >
                                <div>{item.name}</div>
                              </div>
                              <div>Calories: {item.cal}</div>
                              <div>Protein: {item.protein}</div>
                              <div>Carbs: {item.carbs}</div>
                              <div>Sugar: {item.sugar}</div>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                  <hr
                    style={{
                      background: 'lime',
                      color: 'lime',
                      borderColor: 'lime',
                      height: '3px',
                      width: '20vw',
                      marginLeft: '15%',
                    }}
                  />
                  <div className="meals" id="snack">
                    <div id="lab">Snack :</div>
                    <div className="cards">
                      {userData[currdate][0][0]['Breakfast'].map((item) => {
                        // console.log(item.img)
                        return (
                          <Card>
                            <div id="food-img">
                              <img src={item.img} alt=""></img>
                            </div>
                            <div id="food-info">
                              <div
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                }}
                              >
                                <div>{item.name}</div>
                              </div>
                              <div>Calories: {item.cal}</div>
                              <div>Protein: {item.protein}</div>
                              <div>Carbs: {item.carbs}</div>
                              <div>Sugar: {item.sugar}</div>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                  <hr
                    style={{
                      background: 'lime',
                      color: 'lime',
                      borderColor: 'lime',
                      height: '3px',
                      width: '20vw',
                      marginLeft: '15%',
                    }}
                  />
                  <div className="meals" id="dinner">
                    <div id="lab">Dinner :</div>
                    <div className="cards">
                      {userData[currdate][0][0]['Breakfast'].map((item) => {
                        // console.log(item.img)
                        return (
                          <Card>
                            <div id="food-img">
                              <img src={item.img} alt=""></img>
                            </div>
                            <div id="food-info">
                              <div
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'center',
                                }}
                              >
                                <div>{item.name}</div>
                              </div>
                              <div>Calories: {item.cal}</div>
                              <div>Protein: {item.protein}</div>
                              <div>Carbs: {item.carbs}</div>
                              <div>Sugar: {item.sugar}</div>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div id="right-low">
                  <div>Total :</div>
                  <div id="total-data">
                    <div className="total-cards" id="total-cal-in">
                      <div className="name-card">Calorie-In:</div>
                      <CircularProgressbar value={60} text={`${40} / ${500}`} />
                    </div>
                    <div className="total-cards" id="total-cal-out">
                      <div className="name-card">Calories-Out:</div>
                      <CircularProgressbar value={60} text={`${40} / ${500}`} />
                    </div>
                    <div className="total-cards" id="total-protein">
                      <div className="name-card">Protein:</div>
                      <CircularProgressbar value={60} text={`${40} / ${500}`} />
                    </div>
                    <div className="total-cards" id="total-sugar">
                      <div className="name-card">Sugar:</div>
                      <CircularProgressbar value={60} text={`${40} / ${500}`} />
                    </div>
                  </div>
                  <div id="workout">
                    <div>Workout :</div>
                    {userData[currdate][1].map((item, index) => {
                      return (
                        <Card1>
                          <div id="exercise-img">
                            <img src={item.img} alt=""></img>
                          </div>
                          <div id="exercise-info">
                            <div
                              style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                              }}
                            >
                              <div>{item.name}</div>
                            </div>
                            <div>Calories: {item.calories}</div>
                            <div>Duration : {item.duration}</div>
                          </div>
                        </Card1>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Display>
            <Profile>
              <div
                style={{
                  height: '10vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  marginLeft: '10%',
                  fontSize: '24px',
                  color: 'black',
                }}
              >
                My Profile
              </div>
              <div id="prof-img">
                {/* <img src={gender === 'male' ? male[ind] : female[ind]} alt=""></img> */}
                <img
                  src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
                  alt=""
                ></img>
                <div
                  style={{
                    height: '8vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    fontSize: '16px',
                    color: 'black',
                  }}
                >
                  {name}
                </div>
              </div>
              <div id="calendar">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker
                    id="wrap-cal"
                    orientation="portrait"
                    slots={{
                      day: (props) => {
                        // console.log(props)
                        const {
                          highlightedDays = [],
                          day,
                          outsideCurrentMonth,
                          ...other
                        } = props
                        const isSelected =
                          !props.outsideCurrentMonth &&
                          highlightedDays.indexOf(props.day.date()) >= 0
                        return isSelected === true ? (
                          <PickersDay
                            id="day-green"
                            {...other}
                            outsideCurrentMonth={outsideCurrentMonth}
                            day={day}
                          />
                        ) : (
                          <PickersDay
                            {...other}
                            id="day-red"
                            outsideCurrentMonth={outsideCurrentMonth}
                            day={day}
                          />
                        )
                      },
                    }}
                    slotProps={{
                      day: {
                        highlightedDays: [2, 3, 4, 6, 12, 15],
                      },
                    }}
                    onChange={(e) => {
                      const d = String(`${e.$D}-${e.$M + 1}-${e.$y}`).trim()
                      setcurrdate(d)
                    }}
                  />
                </LocalizationProvider>
              </div>
            </Profile>
          </Main>
        )
      ) : (
        <>Repsonsive</>
      )}
    </Page>
  )
}
const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`
const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`
const Display = styled.div`
  height: 100vh;
  width: 70vw;
  background-color: rgba(242, 243, 247, 1);
  display: flex;
  flex-direction: column;
  color: black;
  #upper {
    height: 12vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }
  #upper > div {
    margin-left: 5%;
  }
  #lower {
    height: 88vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  #left-low {
    background-color: rgba(225, 225, 225, 1);
    height: 90%;
    width: 50%;
    overflow: scroll;
    margin-right: 1vw;
  }
  #left-low::-webkit-scrollbar {
    display: none;
  }
  #right-low {
    background-color: rgba(225, 225, 225, 1);
    height: 90%;
    width: 35%;
  }
  #workout {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: scroll;
  }
  #workout::-webkit-scrollbar {
    display: none;
  }
  .meals {
    color: black;
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
  }
  .cards {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  #total-data {
    height: 40%;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 3vh;
  }
  .total-cards {
    height: 40%;
    width: 45%;
    display: flex;
    flex-direction: row;
    background-color: white;
    border: 2px solid #dadada;
    border-radius: 10px;
    margin: 5px;
  }
  .name-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
  }
`
const Profile = styled.div`
  height: 100vh;
  width: 25vw;
  background-color: rgba(201, 213, 165, 1);
  display: flex;
  flex-direction: column;
  #prof-img {
    height: 20%;
    width: 100%;
    margin-top: 5%;
  }
  #prof-img > img {
    height: 100%;
    width: 40%;
    border-radius: 50%;
  }
  #calendar {
    width: 25vw;
    overflow: hidden;
    margin-top: 6vh;
    color: black;
    margin-top: 10vh;
  }
  .MuiPickersDay-today {
    background-color: lightgreen !important;
  }
  .MuiPickersLayout-root,
  .css-4pax7l-MuiPickersLayout-root {
    height: 60vh;
    background-color: transparent !important;
  }
  .MuiCalendarOrClockPicker-root,
  .css-j3g793-MuiCalendarOrClockPicker-root {
    width: 25vw;
    background-color: transparent;
  }
  .css-xelq0e-MuiPickerStaticWrapper-content {
    background-color: transparent;
    width: 100%;
    min-width: 0px;
  }
  #day-green {
    background-color: lightgreen !important;
  }
  #day-red {
    background-color: rgba(255, 115, 115, 1) !important;
  }
`
const Card = styled.div`
  height: 90%;
  width: 17vw;
  display: flex;
  flex-direction: row;
  color: black;
  font-size: 14px;
  #food-img {
    height: 100%;
    width: 50%;
  }
  #food-img > img {
    height: 100%;
    width: 100%;
  }
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 2vh;
  margin-right: 10px;
  #food-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5px;
  }
  #food-info div:first-child {
    font-size: 20px;
    font-weight: bold;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
const Card1 = styled.div`
  height: 42%;
  width: 80%;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  border: 2px solid black;
  #exercise-img {
    height: 100%;
  }
  #exercise-img > img {
    height: 100%;
    width: 100%;
  }
  border-radius: 10px;
  margin-top: 2vh;
  margin-right: 10px;
  #exercise-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 5px;
  }
  #exercise-info div:first-child {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
export default Home

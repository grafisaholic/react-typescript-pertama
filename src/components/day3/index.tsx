import PrivateRouter from "./auth/PrivateRouter"
import Profile from "./auth/Profile"
import List from "./generic/List"
import RandomNumber from "./restriction/RandomNumber";
import Toast from "./templateliterals/Toast";

const list1 = ['Batman', 'Superman', 'Spiderman'];
const list2 = [1, 2, 3, 4];
const list3 = [
  {first: "Bruce", last: "Wayne" },
  {first: "Clark", last: "Kent" },
  {first: "Princes", last: "Diana" },
]

function index() {
  return (
    <div>
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>Private Component Props</h2>
      <PrivateRouter isLoggedIn={true} Component={Profile} />

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>Generic Props</h2>
      <ul className="list-disc">
        <li>
          <List items={list1} onClick={(item) => console.log(item)} />
        </li>
        <li>
          <List items={list2} onClick={(item) => console.log(item)} />
        </li>
        {/* <li>
          <List items={list3} onClick={(item) => console.log(item)} />
        </li> */}
      </ul>

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>Restricting Props</h2>
      <RandomNumber value={10} isPositive/>

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>Template Literals</h2>
      <Toast position="center"/>
    </div>
  )
}

export default index
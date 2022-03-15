import { Name } from './Person.types'

type GreetProps = {
  name: Name,
  messageCount?: number,
  friends: Name[]
}

function Great({name, messageCount = 10, friends} : GreetProps) {

  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold underline underline-offset-1">Basic Props</h1>
      
      <ul className="list-disc">
        <li>
          <h2>
            <label className="font-bold uppercase mr-3">[ OBJECT ]</label>
            welcome {name.first} {name.last} ! You have {messageCount} unread of messages.
          </h2>
        </li>

        <li>
          <h2>
            <label className="font-bold uppercase mr-3">[ ARRAY ]</label>
            {friends.map((r) => (
              <span key={r.first}>
                {r.first} {r.last}, 
              </span>
            ))}
          </h2>
        </li>
      </ul>
    </div>
  )
}

export default Great
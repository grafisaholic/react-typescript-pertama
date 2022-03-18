import CustomButton from "./Button";
import Text from "./Text";

export default function index() {
  return (
    <div>
      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>Wrapping HTML Element</h2>
      <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>   

      <h2 className='text-2xl mb-4 font-bold underline underline-offset-1'>Polymorpic Component</h2>
       <Text as="h1" size="lg">Heading</Text>
       <Text as="p" size="md">Paragraph</Text>
       <Text as="label" htmlFor="someId" size="sm" color="secondary">
         Label
       </Text>
    </div>
  )
}

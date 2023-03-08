import { Input } from './input/input';
export const App = () => {
  // state = {
  //   contacts: [],
  //   name: '',
  // };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Input />
    </div>
  );
};

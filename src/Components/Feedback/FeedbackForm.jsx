import './FeedbackForm.css';

const FeedbackForm = () => {
  return (
    <>
      <form action='search.html' method='post'>
        <h3>find your perfect home</h3>
        <div className='box'>
          <p>Enter Location</p>
          <input
            type='text'
            name='location'
            required
            maxLength='50'
            placeholder='enter ciyt name'
            className='input'
            aria-required='true'
          />
        </div>
        <div className='flex'>
          <div className='box'>
            <p>Property Type</p>
            <select
              title='filter by property type'
              name='type'
              className='input'
              aria-required='true'>
              <option value='house'>house</option>
              <option value='shortlet'>shortlet</option>
              <option value='flat'>flat</option>
              <option value='shop'>shop</option>
              <option value='car'>car</option>
              <option value='filling station'>filling station</option>
              <option value='warehouse'>warehouse (lease)</option>
            </select>
          </div>
          <div className='box'>
            <p>Description</p>
            <select
              title='filter by number of rooms/dispensers/color'
              name='bhk'
              className='input'>
              <option value='rooms' className='choice'>
                number/color
              </option>
              <option value='1'>1 room</option>
              <option value='2'>2 rooms</option>
              <option value='3'>3 rooms</option>
              <option value='4'>4 rooms</option>
              <option value='5'>5 rooms</option>
              <option value='6'>6 rooms</option>
              <option value='7'>7 rooms</option>
              <option value='7'>more rooms</option>
              <option value='dispensers' className='choice'>
                No. of dispensers
              </option>
              <option value='2'>2 dispensers</option>
              <option value='3'>3 dispensers</option>
              <option value='4'>4 dispensers</option>
              <option value='5'>5 dispensers</option>
              <option value='6'>6 dispensers</option>
              <option value='7'>7 dispensers</option>
              <option value='7'>more dispensers</option>
              <option value='color' className='choice'>
                Color
              </option>
              <option value='bleck'>black</option>
              <option value='white'>white</option>
              <option value='gray'>gray</option>
              <option value='silver'>silver</option>
              <option value='red'>red</option>
              <option value='blue'>blue</option>
              <option value='any'>Any</option>
            </select>
          </div>
          <div className='box'>
            <p>Minimum Budget</p>
            <select
              title='minimum amount'
              name='minimum'
              className='input'
              aria-required='true'>
              <option value='350000'>N350,000</option>
              <option value='500000'>N500,000</option>
              <option value='1000000'>N1,000,000</option>
              <option value='2000000'>N2,000,000</option>
              <option value='3000000'>N3,000,000</option>
              <option value='4000000'>N4,000,000</option>
              <option value='5000000'>N5,000,000</option>
              <option value='6000000'>N6,000,000</option>
              <option value='7000000'>N7,000,000</option>
              <option value='8000000'>N8,000,000</option>
              <option value='9000000'>N9,000,000</option>
              <option value='10000000'>N10,000,000</option>
              <option value='11000000'>N11,000,000</option>
              <option value='12000000'>N12,000,000</option>
              <option value='13000000'>N13,000,000</option>
              <option value='14000000'>N14,000,000</option>
              <option value='15000000'>N15,000,000</option>
              <option value='16000000'>N16,000,000</option>
              <option value='17000000'>N17,000,000</option>
              <option value='18000000'>N18,000,000</option>
              <option value='19000000'>N19,000,000</option>
              <option value='20000000'>N20,000,000</option>
            </select>
          </div>
          <div className='box'>
            <p>Maximum Budget</p>
            <select
              title='maximum amount'
              name='maximum'
              className='input'
              aria-required='true'>
              <option value='350000'>N25,000,000</option>
              <option value='350000'>N30,000,000</option>
              <option value='350000'>N35,000,000</option>
              <option value='350000'>N40,000,000</option>
              <option value='350000'>N45,000,000</option>
              <option value='350000'>N50,000,000</option>
              <option value='500000'>N100,000,000</option>
              <option value='1000000'>N150,000,000</option>
              <option value='2000000'>N200,000,000</option>
              <option value='3000000'>N250,000,000</option>
              <option value='4000000'>N300,000,000</option>
              <option value='5000000'>N350,000,000</option>
              <option value='6000000'>N400,000,000</option>
              <option value='7000000'>N450,000,000</option>
              <option value='8000000'>N500,000,000</option>
              <option value='9000000'>N550,000,000</option>
              <option value='10000000'>N600,000,000</option>
              <option value='11000000'>N650,000,000</option>
              <option value='12000000'>N700,000,000</option>
              <option value='13000000'>N750,000,000</option>
              <option value='14000000'>N800,000,000</option>
              <option value='15000000'>N850,000,000</option>
              <option value='16000000'>N900,000,000</option>
              <option value='17000000'>N950,000,000</option>
              <option value='18000000'>N1,000,000,000</option>
              <option value='19000000'>N1,500,000,000</option>
              <option value='20000000'>N2,000,000,000 above</option>
            </select>
          </div>
        </div>
        <input
          type='submit'
          value='search property'
          name='search'
          className='btn'
        />
      </form>
    </>
  );
};

export default FeedbackForm;

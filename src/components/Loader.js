import { Dna } from 'react-loader-spinner';

export const Loader = () => (
  <div className={Loader}>
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  </div>
);
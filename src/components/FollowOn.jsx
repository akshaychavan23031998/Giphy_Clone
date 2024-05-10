import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const FollowOn = () => {
  return (
    <div className='faded-text pt-2'>
        <span>Follow On:</span>
        <div className='flex gap-4 pt-3'>
            <a href='https://www.linkedin.com/in/akshay-chavan23/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
            <a href='https://twitter.com/AkshayC23480775' target="_blank" rel="noopener noreferrer"><FaTwitter size={20}/></a>
            <a href='https://github.com/akshaychavan23031998' target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
        </div>
    </div>
  );
};

export default FollowOn;
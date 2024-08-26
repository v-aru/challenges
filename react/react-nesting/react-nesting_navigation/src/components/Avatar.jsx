import avatar from "../assets/avatar.jpg";
import Image from "./Image";

const Avatar = () => {
    return (
        <button type="button" onClick={() => console.log('I am able to view the profile!')} aria-label="profile">
            <Image src={avatar} avatar=""/>
        </button>
    );
};
export default Avatar;
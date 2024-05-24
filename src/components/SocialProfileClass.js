import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";
import {
    Github_Link,
    Email_Link,
    Linkedin_Link,
    Leetcode_Link,
} from "../config";

class SocialProfileClass extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        // console.log("SocialProfileClass child componentDidMount");
    }

    componentDidUpdate() {
        // console.log("SocialProfileClass child componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("SocialProfileClass child componentWillUnmount");
    }

    render() {
        // console.log("SocialProfileClass child render");
        return (
            <div className="flex gap-10 my-2 items-center justify-center">
                <a
                    href={Linkedin_Link}
                    title="Follow me on Linkedin"
                    className="flex items-center justify-center bg-[#0a66c2] rounded-full h-10 w-10 leading-10 overflow-y-hidden pointer text-white hover:scale-110"
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    <i>
                        <SiLinkedin title="Follow me on Linkedin" />
                    </i>
                </a>
                <a
                    href={Leetcode_Link}
                    title="Checkout my Leetcode"
                    className="flex items-center justify-center bg-[#000] rounded-full h-10 w-10 leading-10 overflow-y-hidden pointer text-white hover:scale-110"
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    <i>
                        <SiLeetcode title="Checkout my Leetcode" />
                    </i>
                </a>
                <a
                    href={Email_Link}
                    title="Any Query! Mail me"
                    className="flex items-center justify-center bg-[#ea4335] rounded-full h-10 w-10 leading-10 overflow-y-hidden pointer text-white hover:scale-110"
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    <i>
                        <SiGmail title="Any Query! Mail me" />
                    </i>
                </a>
                <a
                    href={Github_Link}
                    title="Follow me on Github"
                    className="flex items-center justify-center bg-[#333] rounded-full h-10 w-10 leading-10 overflow-y-hidden pointer text-white hover:scale-110"
                    target="_blank"
                    rel='noopener noreferrer'
                >
                    <i>
                        <SiGithub title="Follow me on Github" />
                    </i>
                </a>
            </div>
        );
    }
}

export default SocialProfileClass;
import { Generic, Info, ProfileImage, UserCardContainer } from "./styles";
import {
  MdWork,
  MdPeopleOutline,
  MdPeople,
  MdAssessment,
  MdWatchLater,
} from "react-icons/md";
import { formatLocalDate } from "../../utils/formatLocalDate";

interface UserProps {
  login: string;
  html_url: string;
  avatar_url: string;
  followers: number;
  public_repos: number;
  name: string;
  following: number;
  company: string;
  created_at: string;
}

const UserCard = ({
  login,
  avatar_url,
  html_url,
  name,
  public_repos,
  followers,
  following,
  company,
  created_at,
}: UserProps) => {
  return (
    <UserCardContainer>
      <h1>
        {login} {name ? `| ${name}` : ""}
      </h1>
      <ProfileImage src={avatar_url} />
      <Info>
        <Generic>
          <MdPeople size={20} />
          <span>{followers} Followers</span>
        </Generic>
        <Generic>
          <MdPeopleOutline size={20} />
          <span>{following} Followings</span>
        </Generic>
      </Info>
      <Info>
        <Generic>
          <MdAssessment size={20} />
          <span>{public_repos} Public Repos</span>
        </Generic>
        <Generic>
          <MdWatchLater size={20} />
          <span>
            Since {created_at && formatLocalDate(created_at, "dd/MM/yyyy")}
          </span>
        </Generic>
      </Info>
      <Info>
        {company && (
          <Generic>
            <MdWork size={20} />
            <span>{company}</span>
          </Generic>
        )}
      </Info>

      <a href={html_url}>Go to profile</a>
    </UserCardContainer>
  );
};

export default UserCard;

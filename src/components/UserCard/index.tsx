import { Generic, Info, Name, ProfileImage, UserCardContainer } from "./styles";
import {
  MdWork,
  MdPeopleOutline,
  MdPeople,
  MdAssessment,
  MdWatchLater,
} from "react-icons/md";
import { formatLocalDate } from "../../utils/formatLocalDate";
import { VisitButton } from "../VisitButton";
import { UserProps } from "../../types/userProps";

const UserCard = (user: UserProps) => {
  return (
    <UserCardContainer>
      <Name>
        {user.login} {user.name ? `| ${user.name}` : ""}
      </Name>
      <ProfileImage src={user.avatar_url} />
      <Info>
        <Generic>
          <MdPeople size={20} />
          <span>{user.followers} Followers</span>
        </Generic>
        <Generic>
          <MdPeopleOutline size={20} />
          <span>{user.following} Followings</span>
        </Generic>
      </Info>
      <Info>
        <Generic>
          <MdAssessment size={20} />
          <span>{user.public_repos} Public Repos</span>
        </Generic>
        <Generic>
          <MdWatchLater size={20} />
          <span>
            Since{" "}
            {user.created_at && formatLocalDate(user.created_at, "dd/MM/yyyy")}
          </span>
        </Generic>
      </Info>
      <Info>
        {user.company && (
          <Generic>
            <MdWork size={20} />
            <span>{user.company}</span>
          </Generic>
        )}
      </Info>

      <VisitButton url={user.html_url} />
    </UserCardContainer>
  );
};

export default UserCard;

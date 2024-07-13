import { IoMdSend } from "react-icons/io";
import {
  MdBroadcastOnHome,
  MdDashboard,
  MdMessage,
  MdOutlineAssignmentTurnedIn,
  MdOutlineFavoriteBorder,
  MdOutlineStar,
  MdOutlineStreetview,
  MdTextsms,
  MdVideoCameraFront,
  MdVideoChat,
} from "react-icons/md";
import { FaRegWindowRestore } from "react-icons/fa";
import {
  RiComputerLine,
  RiFileEditFill,
  RiPresentationLine,
  RiUserFollowFill,
} from "react-icons/ri";
import { IoDocumentAttach, IoMailOpen } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import {
  BsFillOpticalAudioFill,
  BsFillQuestionOctagonFill,
} from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbDeviceTabletStar } from "react-icons/tb";

export const sidebarOptions = [
  {
    id: 2,
    title: "Manage Profile",
    link: "/dashboard/addtocart",
    submenus: [
      {
        id: 1,
        name: "View Profile",
        slug: "/dashboard/cv-preview",
        icons: <FaRegWindowRestore />,
      },
      { id: 2, name: "Dashboard", slug: "/dasboard", icons: <MdDashboard /> },
      {
        id: 3,
        name: "Edit Your Profile",
        slug: "/dashboard/editProfile",
        icons: <RiFileEditFill />,
      },
      {
        id: 4,
        name: "Video CV",
        slug: "/dashboard",
        icons: <MdVideoCameraFront />,
      },
      {
        id: 4,
        name: "Customized CV",
        slug: "/dashboard",
        icons: <IoDocumentAttach />,
      },
      {
        id: 5,
        name: "Emailed CV",
        slug: "/dashboard",
        icons: <SiMinutemailer />,
      },
    ],
  },
  {
    id: 3,
    title: "Invitation",
    link: "/dashboard/addProduct",
    submenus: [
      {
        id: 1,
        name: "Live Interview",
        slug: "/dashboard",
        icons: <MdBroadcastOnHome />,
      },
      {
        id: 2,
        name: "Video INterview",
        slug: "/dashboard",
        icons: <MdVideoChat />,
      },
      {
        id: 3,
        name: "Genaral Interview",
        slug: "/dashboard",
        icons: <IoMailOpen />,
      },
      {
        id: 4,
        name: "Online Test",
        slug: "/dashboard",
        icons: <RiComputerLine />,
      },
      {
        id: 5,
        name: "AI Assesment(viose Based)",
        slug: "/dashboard",
        icons: <BsFillOpticalAudioFill />,
      },
    ],
  },
  {
    id: 4,
    title: "My Activities",
    link: "/dashboard/messages",
    submenus: [
      {
        id: 1,
        name: "Applied Jobs",
        slug: "/dashboard",
        icons: <MdOutlineAssignmentTurnedIn />,
      },
      {
        id: 2,
        name: "Emailed Resume",
        slug: "/dashboard",
        icons: <IoMdSend />,
      },
      {
        id: 3,
        name: "Shortlisted Job",
        slug: "/dashboard",
        icons: <MdOutlineStar />,
      },
      {
        id: 4,
        name: "Following Employer",
        slug: "/dashboard",
        icons: <RiUserFollowFill />,
      },
      {
        id: 5,
        name: "Transection Overview",
        slug: "/dashboard",
        icons: <GiBackwardTime />,
      },
    ],
  },
  {
    id: 5,
    title: "Points & Rewords",
    link: "/dashboard/payment",
    submenus: [
      {
        id: 1,
        name: "My Points",
        slug: "/dashboard",
        icons: <LiaCoinsSolid />,
      },
      {
        id: 2,
        name: "How do I earn points",
        slug: "/dashboard",
        icons: <BsFillQuestionOctagonFill />,
      },
    ],
  },
  {
    id: 6,
    title: "Employer Activities",
    link: "/dashboard/settings",
    submenus: [
      {
        id: 1,
        name: "Employer Viewed CV",
        slug: "/dashboard",
        icons: <MdOutlineStreetview />,
      },
      {
        id: 2,
        name: "Employer Message",
        slug: "/dashboard",
        icons: <MdMessage />,
      },
      {
        id: 3,
        name: "Employer Interested",
        slug: "/dashboard",
        icons: <TbDeviceTabletStar />,
      },
    ],
  },
  {
    id: 7,
    title: "Personalization",
    link: "/dashboard/profile",
    submenus: [
      {
        id: 1,
        name: "Favorite Search",
        slug: "/dashboard",
        icons: <MdOutlineFavoriteBorder />,
      },
      {
        id: 2,
        name: "SMS JOb Alert",
        slug: "/dashboard",
        icons: <MdTextsms />,
      },
      {
        id: 3,
        name: "My Training",
        slug: "/dashboard",
        icons: <RiPresentationLine />,
      },
    ],
  },
];

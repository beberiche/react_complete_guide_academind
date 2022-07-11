import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "http://digitalchosun.dizzo.com/site/data/img_dir/2022/06/10/2022061080123_0.jpg",
    address: "Some address 1, 54321 Some City",
    description: "This is a Second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;

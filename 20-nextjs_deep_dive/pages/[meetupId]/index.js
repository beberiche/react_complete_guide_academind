import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  // const router = useRouter();

  return (
    <MeetupDetail
      id="m1"
      title="A First Meetup"
      image="https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: "A First Meetup",
        image:
          "https://img.khan.co.kr/news/2020/10/16/2020101601001687000138341.jpg",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
        id: meetupId,
      },
    },
  };
}

export default MeetupDetails;

export default {
  STRIPE_KEY: "pk_test_NpkDGbKoaqlkAnqPAbqN6Nhg00orb8T7Ce",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-sls-app-attachments",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://zheso1db7i.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_rNQdjddg4",
    APP_CLIENT_ID: "85t778mdsmh264lhg76l38f55",
    IDENTITY_POOL_ID: "us-east-1:625205f8-5410-4606-8219-aae9ddf84ea0",
  },
};

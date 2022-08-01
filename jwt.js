const crypto = require("crypto")
const jwt= require("jsonwebtoken")

function base64(json) {
  const stringified = JSON.stringify(json)
  // JSON을 문자열화
  const base64Encoded = Buffer.from(stringified).toString("base64")
  // 문자열화 된 JSON 을 Base64 로 인코딩
  const paddingRemoved = base64Encoded.replaceAll("=", "")
  // Base 64 의 Padding(= or ==) 을 제거
  // Base64 로 문자열을 인코딩 하면, 결과물 마지막에 = 혹은 == 가 가끔 같이 나오는 경우가 존재한다. 이를 Padding 이라고 하는데, 이를 제거하지 않으면 URL Safe 하지 않게 되므로 반드시 제거하자. 제거해도 Decode 를 정상적으로 할 수 있다.

  return paddingRemoved
}

const header = {
  alg: "HS512",
  typ: "JWT",
}

const encodedHeader = base64(header)

const iat = Math.floor(Date.now() / 1000)
const payload = {
  data: 'ohbin',
  expiresIn: '14d',
  iat
}

const encodedPayload = base64(payload)

const signature = crypto
  .createHmac("sha256", "secretkey")
  .update(`${encodedHeader}.${encodedPayload}`)
  .digest("base64")
  .replaceAll("=", "")
  .replaceAll("/", "_")
  .replaceAll("+", "-")

const result1 = `${encodedHeader}.${encodedPayload}.${signature}`
console.log(result1)

// const result2 = jwt.sign(payload, "secretkey", {algorithm: "HS256"})

// console.log(result2)

// const decoded = jwt.decode(result1, {complete: true})
// const verified = jwt.verify(result1, "secretkey", {complete: true})

// console.log(decoded)
// console.log(verified)
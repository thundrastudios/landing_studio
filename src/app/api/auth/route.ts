const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

export async function GET(request: Request) {
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, password } = body;

  const newUser = { id: Date.now(), name, password };
  users.push(newUser);

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const BASE_URL = process.env.BASE_URL;

export async function login({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      return { success: true, ...data };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: error.message };
  }
}

export async function register({ username, email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      return { success: true, ...data };
    } else {
      return { success: false, message: data.message };
    }
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, message: error.message };
  }
}

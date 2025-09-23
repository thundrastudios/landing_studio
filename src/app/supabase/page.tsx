"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/serve_components/supabaseServer";

export function page() {
  const [countries, setCountries] = useState([]);
  const fetchCountries = async () => {
    const { data: countries } = await supabase
      .from("countries")
      .select("*")
      .order("name", true);
    setCountries(countries);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}

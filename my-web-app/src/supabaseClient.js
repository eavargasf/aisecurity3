// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ofynsyxraefulosfvplp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9meW5zeXhyYWVmdWxvc2Z2cGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMwMzIwNDIsImV4cCI6MjAzODYwODA0Mn0.SKMTG7Mgq9cM37B4hJnPREqI3dMb3z5dE3Q3Yu2vTFU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

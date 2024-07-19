 bool IsAnagram(string s, string t) {
        // sort them both and see if they're the same
        char[] ss = s.ToCharArray();
        char[] tt = t.ToCharArray();
        Array.Sort(ss);
        Array.Sort(tt);
        // Console.WriteLine(ss);
        // Console.WriteLine(tt);
        return ss.SequenceEqual(tt);
    }


//// Tests
// Console.WriteLine(IsAnagram("cat", "rat").ToString());
// Console.WriteLine(IsAnagram("tar", "rat").ToString());
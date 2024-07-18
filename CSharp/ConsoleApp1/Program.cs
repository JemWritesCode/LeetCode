 bool IsAnagram(string s, string t) {
        // sort them both and see if they're the same?
        String.Concat(s.OrderBy(c =>c));
        String.Concat(t.OrderBy(c =>c));
        Console.WriteLine(s);
        Console.WriteLine(t);
        return Equals(s,t);
    }


//Tests
Console.WriteLine(IsAnagram("cat", "rat").ToString());
Console.WriteLine(IsAnagram("tar", "rat").ToString());
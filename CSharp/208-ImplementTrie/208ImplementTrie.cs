/* Trie

bit unsure of this explaination, note to me come back to this

Time Complexity: O(n) (Analyze Complexity Confirmed)
for each word you may have to insert every letter in the word

Space Complexity: O(n) (Analyze Complexity Confirmed)
store the whole word

*/
public class Trie {
    Trie[] links;
    int count = 26;
    bool isEndOfWord = false;

    public Trie() {
        links = new Trie[count];
    }
    
    public void Insert(string word) {
        Trie temp = this;
        foreach (char c in word){
            int index = c - 'a';
            if(temp.links[index] == null)
                temp.links[index] = new Trie();
            temp = temp.links[index];
        }
        temp.isEndOfWord = true;
    }
    
    public bool Search(string word) {
        Trie temp = this;
        foreach (char c in word){
            int index = c - 'a';
            if(temp.links[index] == null) return false;
            temp = temp.links[index];
        }
        return temp.isEndOfWord;
    }
    
    public bool StartsWith(string prefix) {
        Trie temp = this;
        foreach(char c in prefix){
            int index = c - 'a';
            if (temp.links[index] == null) return false;
            temp = temp.links[index];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.Insert(word);
 * bool param_2 = obj.Search(word);
 * bool param_3 = obj.StartsWith(prefix);
 */